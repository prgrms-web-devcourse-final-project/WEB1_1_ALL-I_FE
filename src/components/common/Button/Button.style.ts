import styled from "styled-components";

export const Button = styled.button<{
  $buttonType: string;
  $isHoverEffect?: boolean;
}>`
  font-weight: var(--font-weight-bold);
  border: 1px solid var(--color-primary);
  cursor: pointer;

  ${(props) =>
    props.$isHoverEffect &&
    `
    &:hover {
      background-color: var(--color-primary-hover);
      color: white;
    }
    `}

  ${(props) => {
    switch (props.$buttonType) {
      case "primaryLarge":
        return `
          width: 339px;
          height: 60px;
          background-color: var(--color-primary);
          font-size: var(--font-size-large);
          border-radius: var(--border-radius-large);
          color: white;
        `;
      case "primaryMedium":
        return `
          width: 127px;
          height: 31px;
          background-color: var(--color-primary);
          font-size: var(--font-size-medium);
          border-radius: var(--border-radius-default);
          color: white;
        `;
      case "primarySmall":
        return `
          width: 64px;
          height: 31px;
          background-color: var(--color-primary);
          font-size: var(--font-size-medium);
          border-radius: var(--border-radius-default);
          color: white;
        `;
      case "primaryMicro":
        return `
            width: 53px;
            height: 32px;
            background-color: var(--color-primary);
          font-size: var(--font-size-medium);
            border-radius: var(--border-radius-default);
            color: white;
          `;
      case "whiteMedium":
        return `
          width: 127px;
          height: 31px;
          background-color: white;
          font-size: var(--font-size-medium);
          border-radius: var(--border-radius-default);
          color: var(--color-gray-dark);
        `;
      case "whiteSmall":
        return `
          width: 64px;
          height: 31px;
          background-color: white;
          font-size: var(--font-size-medium);
          border-radius: var(--border-radius-default);
          color: var(--color-gray-dark);
        `;
      case "whiteMicro":
        return `
          width: 53px;
          height: 32px;
          background-color: white;
          font-size: var(--font-size-medium);
          border-radius: var(--border-radius-default);
          color: var(--color-gray-dark);
        `;
    }
  }}
`;
