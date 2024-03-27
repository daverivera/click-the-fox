import styled from 'styled-components';

interface BoardProps {
    images: Array<string>;
    onImageClicked: (type: string) => void;
}

const BoardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: auto;
    width: 360px;
`;

const ImageWrapper = styled.div`
    cursor: pointer;
    height: 120px;
    overflow: hidden;
    width: 120px;
`;

const Image = styled.img`
    height: 100%;
    object-fit: cover;
    width: 100%;
`;

export function Board({ images, onImageClicked }: BoardProps) {
    return (
        <BoardContainer>
            {images.map(({ image, type }, index) => {
                return (
                    <ImageWrapper onClick={() => onImageClicked(type)} key={index} data-testid={type}>
                        <Image src={image} key={image} />;
                    </ImageWrapper>
                );
            })}
        </BoardContainer>
    );
}
