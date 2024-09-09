import React from "react";

import { DropDownWrapper, DropDownContainer, LabelContainer } from "./DropDown.style";

export interface DropDownProps {
    color: string;
    width: string;
    height: string;
    selectedDepartment?: string;
    setSelectedDepartment?: React.Dispatch<React.SetStateAction<string>>;
}

export default function DropDown({
    color,
    width,
    height,
    selectedDepartment: selectedMajor,
    setSelectedDepartment: setSelectedMajor,
}: DropDownProps) {
    const majors = [
        { label: "📖 인문대학", value: "humanities" },
        { label: "📋 사회과학대학", value: "social-sciences" },
        { label: "🔬 자연과학대학", value: "natural-sciences" },
        { label: "📊 경상대학", value: "economics" },
        { label: "🛠️ 공과대학", value: "engineering" },
        { label: "💻 IT대학", value: "it" },
        { label: "🥕 농업생명과학대학", value: "agriculture" },
        { label: "🎨 예술대학", value: "arts" },
        { label: "📚 사범대학", value: "teachers" },
        { label: "🥼 의과대학", value: "medicine" },
        { label: "🦷 치과대학", value: "dentisty" },
        { label: "🐈 수의과대학", value: "vet" },
        { label: "🧼 생활과학대학", value: "human-sciences" },
        { label: "💉 간호대학", value: "nursing" },
        { label: "💊 약학대학", value: "pharmacy" },
        { label: "🚙 첨단기술융합대학", value: "advanced-technology" },
        { label: "🪵 생태환경대학", value: "environment" },
        { label: "📡 과학기술대학", value: "science-technology" },
        { label: "🖋️ 행정학부", value: "administration" },
        { label: "💡 자율전공부", value: "undeclared" },
    ];

    return (
        <DropDownWrapper color={color} width={width} height={height}>
            <DropDownContainer
                value={selectedMajor}
                onChange={(e) => setSelectedMajor && setSelectedMajor(e.value)}
                options={majors}
                optionLabel="label"
                placeholder="단과 대학을 선택하세용"
                itemTemplate={(option) => <LabelContainer color={color}>{option.label}</LabelContainer>}
                panelStyle={{
                    borderRadius: "16px",
                    overflow: "hidden",
                }}
            />
        </DropDownWrapper>
    );
}
