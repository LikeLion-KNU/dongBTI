import React from "react";

import { Text } from "../typography";
import { ResultCardWrapper, RSC } from "./ResultCard.styled";

export interface ResultCardDataProps extends Object {
    name: string;
    dbti_type: string;
    dbti_name: string;
    cardOrder: number;
    color: string;
    emoji: string;
}

export interface ResultCardProps extends React.ComponentProps<"div"> {
    props: ResultCardDataProps;
}

export const ResultCard: React.FC<ResultCardProps> = ({ props }) => {
    return (
        <ResultCardWrapper color={props.color}>
            <RSC.LeftContent>
                <img width="96px" height="96px" src={`${props.emoji}.svg`} />
            </RSC.LeftContent>
            <RSC.RightContent>
                <Text size="s" weight="bold" color="#ffffff">
                    {props.name}의 동BTI 카드
                </Text>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <Text size="xl" weight="heavy" color="#ffffff">
                        {props.dbti_type}
                    </Text>
                    <Text size="xs" weight="bold" color="#ffffff">
                        {props.dbti_name}
                    </Text>
                </div>
                <Text size="xs" weight="bold" color="#ffffff88">
                    {props.cardOrder}번째로 발급된 카드
                </Text>
            </RSC.RightContent>
        </ResultCardWrapper>
    );
};
