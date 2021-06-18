import { OuterPopup, InnerPopup, CloseButton } from './styled'
import close from '../../../../assets/posts/close.png'


const Popup = props => {
    return (props.toggle) ? (
        <OuterPopup>
            <InnerPopup>
                <CloseButton onClick={() => {props.close(false); props.clear([])}}><img src={close} alt='close'/></CloseButton>
                { props.children }
            </InnerPopup>
        </OuterPopup>
    ) : null;
}

export default Popup