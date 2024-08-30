import React from "react";

import { Card, DropdownContainer, LabelContainer } from "./Dropdown.style";

interface DropdownProps {
    color: string;
    width: string;
    height: string;
    selectedMajor: string;
    setSelectedMajor: React.Dispatch<React.SetStateAction<string>>;
}

export default function dropdown({ color, width, height, selectedMajor, setSelectedMajor }: DropdownProps) {
    const majors = [
        { label: "📖 인문대학", value: "인문대학" },
        { label: "📋 사회과학대학", value: "사회과학대학" },
        { label: "🔬 자연과학대학", value: "자연과학대학" },
        { label: "📊 경상대학", value: "경상대학" },
        { label: "🛠️ 공과대학", value: "공과대학" },
        { label: "💻 IT대학", value: "IT대학" },
        { label: "🥕 농업생명과학대학", value: "농업생명과학대학" },
        { label: "🎨 예술대학", value: "예술대학" },
        { label: "📚 사범대학", value: "사범대학" },
        { label: "🥼 의과대학", value: "의과대학" },
        { label: "🦷 치과대학", value: "치과대학" },
        { label: "🐈 수의과대학", value: "수의과대학" },
        { label: "🧼 생활과학대학", value: "생활과학대학" },
        { label: "💉 간호대학", value: "간호대학" },
        { label: "💊 약학대학", value: "약학대학" },
        { label: "🚙 첨단기술융합대학", value: "첨단기술융합대학" },
        { label: "🪵 생태환경대학", value: "생태환경대학" },
        { label: "📡 과학기술대학", value: "과학기술대학" },
        { label: "🖋️ 행정학부", value: "행정학부" },
        { label: "💡 자율전공부", value: "자율전공부" },
    ];

    return (
        <Card color={color} width={width} height={height}>
            <DropdownContainer
                value={selectedMajor}
                onChange={(e) => setSelectedMajor(e.value)}
                options={majors}
                optionLabel="label"
                placeholder="단과 대학을 선택하세용"
                itemTemplate={(option) => <LabelContainer color={color}>{option.label}</LabelContainer>}
            />
        </Card>
    );
}
