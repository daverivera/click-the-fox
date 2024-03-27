import { PropsWithChildren } from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
    bottom: 30%;
    max-width: 650px;
    position: absolute;
    width: 100%;
`;

export default function Footer({ children }: PropsWithChildren) {
    return <FooterContainer>{children}</FooterContainer>;
}
