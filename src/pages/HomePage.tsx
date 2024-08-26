import { Text } from "@/components/typography/Text";

import { HomePageWrapper } from "./HomePage.style";

export default function HomePage() {
    return (
        <HomePageWrapper>
            <Text size="xl">XL</Text>
            <Text size="l">L</Text>
            <Text size="m">M</Text>
            <Text size="s">S</Text>
            <Text size="xs">XS</Text>
        </HomePageWrapper>
    );
}
