import swipe from "@/assets/swipe.svg";

import { Text } from "../typography/Text";
import { ModalContent, ModalWrapper } from "./FeedbackModal.style";

export default function FeedbackModal({ onClose }: { onClose: () => void }) {
    return (
        <ModalWrapper onClick={onClose}>
            <ModalContent>
                <img src={swipe} alt="Swipe Icon" style={{ marginBottom: "20px" }} />
                <Text size="m">좌우로 스와이프</Text>
                <Text size="xs">또는 버튼으로 조작</Text>
            </ModalContent>
        </ModalWrapper>
    );
}
