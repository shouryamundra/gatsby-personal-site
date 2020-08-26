import React, {useState} from 'react';
import Logo from './Logo';
import Footer from './Footer';
import Menu from './Menu';
import ToggleMenu from './ToggleMenu';
import styled, {css} from 'styled-components';
import {addRemToProperty} from '../../styles/shared';

type WrapperProps = {
  enablePointerEvents: boolean;
};
const Wrapper = styled.div<WrapperProps>`
  pointer-events: ${props => (props.enablePointerEvents ? 'none' : 'all')};
  ${props => props.theme.media.md`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 10;
  `}
  @media only screen and (min-width:  54em) {
    pointer-events: none;
  }
`;

type ShoableProps = {
  open: boolean;
  transparent: boolean;
};

const Shoable = styled.div<ShoableProps>`
  ${props => props.theme.media.md`
    background: ${(props: any) =>
      props.transparent ? 'none' : props.theme.colors.primaryDark};
    overflow: hidden;
    transition: max-height .6s cubic-bezier(0.45, 0, .1, 1);
    will-change: max-height;
    
    ${(props: any) =>
      props.open
        ? css`
            max-height: 300px;
          `
        : css`
            max-height: 0;
          `}

      > div {
        padding: 0 3rem 3rem;
      }
  `}

  ${props => props.theme.media.sm`
    > div {
      padding: 0 2rem 2rem;
    }
  `}
`;

type HeaderProps = {
  transparent: boolean;
};

const Header = styled.header<HeaderProps>`
  ${props => props.theme.media.md`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;
    min-height: 7rem;
    ${addRemToProperty('padding')};
  `}
  ${(props: any) =>
    !props.transparent &&
    css`
      background-image: linear-gradient(
        to bottom,
        ${(props: any) => props.theme.colors.primaryDark + '00'} 0%,
        ${(props: any) => props.theme.colors.primaryDark} 50%
      );
    `}
`;

interface HelpMessageProps {
  open: boolean;
  transparent: boolean;
}
// Todo: transition disapear in some seconds
const HelpMessage = styled.div<HelpMessageProps>`
  transition: all 2s;
  color: ${props => props.theme.colors.light};
  font-size: ${props => props.theme.fontSizes.normal};
  font-weight: ${props => props.theme.fontWeights.normal};
  font-family: ${props => props.theme.fontFamilies.code};
  letter-spacing: 0.05rem;
  text-align: center;

  ${props => props.theme.media.sm`
  margin-bottom: -0.3rem;
      max-width: 70%;
  `}
  ${props => props.open && `opacity: 0;`}
  ${props => !props.transparent && `display: none;`}
`



interface NavigationContainerProps {
  readonly transparentNavigation: boolean;
}

export const NavigationContainer: React.FC<NavigationContainerProps> = ({
  transparentNavigation
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Wrapper enablePointerEvents={transparentNavigation}>
      <Header transparent={transparentNavigation}>
        <Logo />
        <HelpMessage open={open} transparent={transparentNavigation}>
        Swipe around the screen or zoom it
        </HelpMessage>
        <ToggleMenu open={open} onClick={() => setOpen(!open)} />
      </Header>
      <Shoable open={open} transparent={transparentNavigation}>
        <div>
          <Menu />
          <Footer />
        </div>
      </Shoable>
    </Wrapper>
  );
};