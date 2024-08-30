// import { useNavigate } from "react-router-dom";
import { useState } from "react";

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
    // let navigate = useNavigate(); 추후에 사용할 예정
    const [root, setRoot] = useState<TreeNode | null>(null);
    const field = [
        "전시,공연,연극 분야",
        "사회,자원활동 분야",
        "종교 분야",
        "체육,민족무예 분야",
        "학술,취미교양 분야",
    ];

    function handleLeftClick() {
        if (root?.left?.getValue.question === null) {
            console.log("선택완료");
            // navigate("/result");
        } else {
            setRoot(root?.left || null);
        }
    }

    function handleRightClick() {
        if (root?.right?.getValue.question === null) {
            console.log("선택완료");
            // navigate("/result");
        } else {
            setRoot(root?.right || null);
        }
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
                            <Button width="80%" height="7vh" variants="select" onClick={handleLeftClick}>
                                <Text size="m">{root?.left?.getValue.choice}</Text>
                            </Button>
                            <Button width="80%" height="7vh" variants="select" onClick={handleRightClick}>
                                <Text size="m">{root?.right?.getValue.choice}</Text>
                            </Button>
                        </>
                    ) : (
                        <>
                            {field.map((value) => (
                                <Button
                                    width="80%"
                                    height="7vh"
                                    variants="select"
                                    onClick={() =>
                                        setRoot(
                                            value === "전시,공연,연극 분야"
                                                ? StageRoot
                                                : value === "사회,자원활동 분야"
                                                  ? SocietyRoot
                                                  : value === "종교 분야"
                                                    ? ReligionRoot
                                                    : value === "체육,민족무예 분야"
                                                      ? BallGameRoot
                                                      : DiscussionRoot,
                                        )
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
