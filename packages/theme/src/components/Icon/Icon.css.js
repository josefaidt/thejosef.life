import styled from 'styled-components'
import theme from '../styles/_theme'

const StyledIcons = styled.div.attrs(({ iHeight }) => ({
  height: iHeight || '1.3rem',
}))`
  display: flex;
  align-items: center;

  .icon {
    padding: 0 10px;
    height: 100%;
    display: flex;
    align-items: center;

    color: ${theme.almostblack};
    fill: ${theme.almostblack};
  }

  .icon a {
    display: flex;
    span {
      position: relative;
      padding-left: 0.3rem;
    }
  }

  .icon svg {
    fill: rgb(90, 83, 91);
    height: ${props => props.iHeight};
    filter: brightness(120%);
  }

  .share {
    color: ${theme.almostblack};
    font-weight: bold;
  }

  .icon:hover .share,
  .icon:hover svg {
    color: ${theme.red};
    fill: ${theme.rouge};
    transition: ease 0.3s;
  }
`

export default StyledIcons
