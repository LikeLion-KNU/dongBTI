// import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/form/Button";
import { Text } from "@/components/typography";

import { BallGameRoot } from "@/services/BallGameRoot";
import { DiscussionRoot } from "@/services/DiscussionRoot";
import { ReligionRoot } from "@/services/ReligionRoot";
import { SocietyRoot } from "@/services/SocietyRoot";
import { StageRoot } from "@/services/StageRoot";
import { TreeNode } from "@/services/TreeNode";

import dongari from "@/assets/images/dongari.png";

import { ButtonWrapper, SelectPageWrapper } from "./SelectPage.style";

export default function SelectPage() {
    let navigate = useNavigate();

    const [root, setRoot] = useState<TreeNode | null>(null);
    const [selectedButton, setSelectedButton] = useState("");
    const field = [
        "전시,공연,연극 분야",
        "사회,자원활동 분야",
        "종교 분야",
        "체육,민족무예 분야",
        "학술,취미교양 분야",
    ];

    function chooseSection(value: string) {
        switch (value) {
            case "전시,공연,연극 분야":
                return StageRoot;
            case "사회,자원활동 분야":
                return SocietyRoot;
            case "종교 분야":
                return ReligionRoot;
            case "체육,민족무예 분야":
                return BallGameRoot;
            case "학술,취미교양 분야":
                return DiscussionRoot;
            default:
                return null;
        }
    }

    function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
        const { id } = e.currentTarget; // 클릭된 버튼의 id 가져오기
        setSelectedButton(id); // 클릭된 버튼 상태 저장

        setTimeout(() => {
            if (id === "left") {
                if (root?.left?.getValue.question === null) {
                    navigate(`/result?resultType=${root?.left?.getValue.resultType}`);
                } else {
                    setRoot(root?.left || null);
                }
            } else if (id === "right") {
                if (root?.right?.getValue.question === null) {
                    navigate(`/result?resultType=${root?.right?.getValue.resultType}`);
                } else {
                    setRoot(root?.right || null);
                }
            } else if (id.startsWith("root")) {
                setRoot(chooseSection((e.target as HTMLButtonElement).innerText));
            }
            setSelectedButton(""); // 애니메이션 끝난 후 상태 초기화
        }, 700); // 0.5초 후에 root 변경
    }

    return (
        <>
            <SelectPageWrapper style={root === null ? { marginTop: "5vh" } : {}}>
                <img src={dongari} alt="동BTI" style={{ aspectRatio: "1/1", width: "20vh" }}></img>
                {root ? (
                    <Text size="xl">{root?.getValue.question}</Text>
                ) : (
                    <Text size="m" style={{ textAlign: "center", fontWeight: "bold" }}>
                        두근두근 설레는 가두보집! <br /> 동아리 부스가 엄청 많다! <br /> 어느 분야부터 설명을 들어볼까?
                    </Text>
                )}
                <ButtonWrapper style={root === null ? { gap: "2.5vh" } : {}}>
                    {root ? (
                        <>
                            <Button
                                id="left"
                                width="80%"
                                height="7vh"
                                variants="select"
                                onClick={handleClick}
                                style={
                                    selectedButton === "left"
                                        ? {
                                              backgroundColor: "#37cdcd",
                                              color: "#FFFF",
                                              transition: "background-color 0.3s, color 0.3s",
                                          }
                                        : undefined
                                }
                            >
                                <Text size="m">{root?.left?.getValue.choice}</Text>
                            </Button>
                            <Button
                                id="right"
                                width="80%"
                                height="7vh"
                                variants="select"
                                onClick={handleClick}
                                style={
                                    selectedButton === "right"
                                        ? {
                                              backgroundColor: "#37cdcd",
                                              color: "#FFFF",
                                              transition: "background-color 0.3s, color 0.3s",
                                          }
                                        : undefined
                                }
                            >
                                <Text size="m">{root?.right?.getValue.choice}</Text>
                            </Button>
                        </>
                    ) : (
                        <>
                            {field.map((value, index) => (
                                <Button
                                    key={index}
                                    id={`root${index}`}
                                    width="80%"
                                    height="7vh"
                                    variants="select"
                                    onClick={handleClick}
                                    style={
                                        selectedButton === `root${index}`
                                            ? {
                                                  backgroundColor: "#37cdcd",
                                                  color: "#FFFF",
                                                  transition: "background-color 0.3s, color 0.3s",
                                              }
                                            : undefined
                                    }
                                >
                                    <Text size="m">{value}</Text>
                                </Button>
                            ))}
                        </>
                    )}
                </ButtonWrapper>
            </SelectPageWrapper>
        </>
    );
}
