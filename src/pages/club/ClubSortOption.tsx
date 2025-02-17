import styled from "styled-components";

const SORT_OPTIONS = [
    { value: "필터" },
    { value: "최신순" },
    { value: "인기순" },
];

interface SortOptionsProps {
    buttonState: string;
    onSortChange: (value: string) => void;
}

const SortOptionsContainer = styled.div`
    height: 8%;
    position: absolute; 
    right: 120px;
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 10px;
    padding-bottom: 70px;
`;

const SortButton = styled.button<{ active: boolean }>`
    padding: 3px 6px;
    border: 2px solid ${({ active }) => (active ? "gray" : "#E5E7EB")};
    border-radius: 5px;
    background-color: transparent;
    font-weight: ${({ active }) => (active ? "550" : "500")};
    cursor: pointer;
`;

export default function SortOption({ buttonState, onSortChange }: SortOptionsProps) {
    return (
        <SortOptionsContainer>
            {SORT_OPTIONS.map(({ value }) => (
                <SortButton
                    key={value}
                    active={buttonState === value}
                    onClick={() => onSortChange(value)}
                >
                    {value}
                </SortButton>
            ))}
        </SortOptionsContainer>
    );
}
