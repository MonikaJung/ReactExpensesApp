import "./WrapperStd.css";

export default function WrapperStd(props) {
    const classes = 'wrapper-std ' + props.className;

    return <div className={classes}>{props.children}</div>
}