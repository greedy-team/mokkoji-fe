import styled from "styled-components";

const SORT_OPTIONS = [
    { value: "즐겨찾기순" },
    { value: "최신순" },
    { value: "마감일순" },
];

interface SortOptionsProps {
    buttonState: string;
    onSortChange: (value: string) => void;
}

const SortOptionsContainer = styled.div`
    margin-right: 1%;
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: right;
    gap: 8px;
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
