import { useEffect, useRef, useState } from "react";

import { motion } from "framer-motion";

import { Text } from "@/components/typography/Text";

import leftArrow from "@/assets/leftArrow.svg";
import rightArrow from "@/assets/rightArrow.svg";

import { questions } from "@/constants/Question";

import { SelectPageWrapper } from "./SelectPage.style";

export default function SelectPage() {
    const myQuestions = questions;
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [leftWidth, setLeftWidth] = useState(50); // 기본으로 왼쪽 50%, 오른쪽 50%
    const constraintsRef = useRef(null);
    const initialX = useRef(0); // 드래그 시작 위치를 저장할 ref

    const handleDragStart = (event, info) => {
        initialX.current = info.point.x; // 드래그 시작 위치 저장
    };

    const handleDrag = (event, info) => {
        const midPoint = window.innerWidth / 2; // 화면의 중앙값을 기준으로 설정
        const newLeftWidth = (info.point.x / midPoint) * 50; // 화면 중앙 기준으로 왼쪽 영역 비율 계산
        console.log(info.point.x, newLeftWidth);
        setLeftWidth(newLeftWidth);
    };

    const handleDragEnd = (event, info) => {
        const deltaX = info.point.x - initialX.current; // 드래그 이동 거리 계산
        if (deltaX >= 60) {
            // 이동 거리가 60px 이상인 경우
            setCurrentQuestionIndex((prev) => prev + 1); // currentQuestionIndex 증가
        } else if (deltaX <= -60) {
            // 이동 거리가 -60px 이하인 경우
            setCurrentQuestionIndex((prev) => prev + 1); // currentQuestionIndex 감소
        }
    };

    return (
        <SelectPageWrapper>
            <div className="cardContainer">
                {questions.map(
                    (question, index) =>
                        index === currentQuestionIndex && (
                            <div key={index} className="cardWrapper">
                                <Text size="m">{question.text}</Text>
                                <motion.div className="container" ref={constraintsRef}>
                                    <motion.div
                                        className="item"
                                        drag
                                        onDragStart={handleDragStart}
                                        onDrag={handleDrag}
                                        onDragEnd={handleDragEnd}
                                        dragConstraints={constraintsRef}
                                        dragElastic={0.5} // 조절 가능한 탄력성을 설정
                                        dragSnapToOrigin={true} // 드래그가 끝나면 원래 위치로 돌아가도록 설정
                                        style={{ backgroundImage: `url(${question.imageUrl})` }}
                                    />
                                </motion.div>
                            </div>
                        ),
                )}
            </div>

            <div className="optionContainer">
                <div className="optionWrapper">
                    <div className="optionLeft" style={{ width: `${leftWidth}%` }}>
                        <Text size="xs">{questions[currentQuestionIndex].option[0]}</Text>
                    </div>
                    <img src={leftArrow} className="leftArrow" />
                </div>
                <div className="optionWrapper">
                    <img src={rightArrow} className="rightArrow" />
                    <div className="optionRight" style={{ width: `${100 - leftWidth}%` }}>
                        <Text size="xs">{questions[currentQuestionIndex].option[1]}</Text>
                    </div>
                </div>
            </div>
        </SelectPageWrapper>
    );
}
