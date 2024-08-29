import { useRef, useState } from "react";

// import { useNavigate } from "react-router-dom";
import { PanInfo } from "framer-motion";

import FeedbackModal from "@/components/feedback/FeedbackModal";
import { Text } from "@/components/typography/Text";

import leftArrow from "@/assets/leftArrow.svg";
import rightArrow from "@/assets/rightArrow.svg";
import swipe from "@/assets/swipe.svg";

import { questions } from "@/constants/Question";

import {
    SelectPageContainer,
    SelectPageWrapper,
    CardWrapper,
    CardContainer,
    ItemWrapper,
    Item,
    OptionWrapper,
    OptionLeft,
    OptionRight,
    OptionContainer,
} from "./SelectPage.style";
import ProgressBar from "@ramonak/react-progress-bar";

export default function SelectPage() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(1);
    const [animateLeftToRight, setAnimateLeftToRight] = useState(false);
    const [animateRightToLeft, setAnimateRightToLeft] = useState(false);
    const constraintsRef = useRef(null);
    const initialX = useRef(0);
    const [isModalOpen, setIsModalOpen] = useState(true);
    // let navigate = useNavigate(); 추후에 사용할 예정

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleDragStart = (event: Event, info: PanInfo) => {
        initialX.current = info.point.x;
    };

    const handleDragEnd = (event: Event, info: PanInfo) => {
        const deltaX = info.point.x - initialX.current;
        if (deltaX >= 60) {
            setAnimateLeftToRight(true);
            setAnimateRightToLeft(false);
        } else if (deltaX <= -60) {
            setAnimateRightToLeft(true);
            setAnimateLeftToRight(false);
        }
    };

    const handleAnimationComplete = () => {
        setTimeout(() => {
            if (animateLeftToRight) {
                setCurrentQuestionIndex((prev) => prev * 2);
            } else if (animateRightToLeft) {
                setCurrentQuestionIndex((prev) => prev * 2 + 1);
            }

            setAnimateLeftToRight(false);
            setAnimateRightToLeft(false);
        }, 400); // 0.5초(500ms) 기다린 후 인덱스 증가
    };

    return (
        <>
            {isModalOpen && <FeedbackModal onClose={handleCloseModal} />}
            <SelectPageWrapper>
                <ProgressBar isLabelVisible={false} completed={currentQuestionIndex * 15} bgColor="#37cdcd" />
                <SelectPageContainer>
                    <CardWrapper>
                        {questions.map(
                            (question, index) =>
                                index === currentQuestionIndex && (
                                    <CardContainer key={index}>
                                        <Text size="l">{question.text}</Text>
                                        <ItemWrapper ref={constraintsRef}>
                                            <Item
                                                drag
                                                onDragStart={handleDragStart}
                                                onDragEnd={handleDragEnd}
                                                dragConstraints={constraintsRef}
                                                dragElastic={0.5}
                                                dragSnapToOrigin={true}
                                                style={{ backgroundImage: `url(${question.imageUrl})` }}
                                            />
                                        </ItemWrapper>
                                    </CardContainer>
                                ),
                        )}
                    </CardWrapper>

                    <OptionWrapper style={{ flexDirection: animateRightToLeft ? "row-reverse" : "row" }}>
                        <OptionContainer style={{ display: animateRightToLeft ? "none" : "flex" }}>
                            <OptionLeft
                                initial={{ width: "auto" }}
                                animate={animateLeftToRight ? { width: "102vw" } : { width: "auto" }}
                                transition={{
                                    delay: 0.2,
                                    duration: 1, // Decreased animation duration to make it faster
                                    ease: "easeInOut",
                                }}
                                onAnimationComplete={animateLeftToRight ? handleAnimationComplete : undefined}
                            >
                                <Text size="xs">{questions[currentQuestionIndex].option[0]}</Text>
                            </OptionLeft>

                            <img src={leftArrow} />
                        </OptionContainer>
                        <OptionContainer style={{ display: animateLeftToRight ? "none" : "flex" }}>
                            <img src={rightArrow} />
                            <OptionRight
                                initial={{ width: "auto" }}
                                animate={animateRightToLeft ? { width: "102vw" } : { width: "auto" }}
                                transition={{
                                    delay: 0.2,
                                    duration: 1, // Decreased animation duration to make it faster
                                    ease: "easeInOut",
                                }}
                                onAnimationComplete={animateRightToLeft ? handleAnimationComplete : undefined}
                            >
                                <Text size="xs">{questions[currentQuestionIndex].option[1]}</Text>
                            </OptionRight>
                        </OptionContainer>
                    </OptionWrapper>
                </SelectPageContainer>
            </SelectPageWrapper>
        </>
    );
}
