import './spinners.scss'
export const Spinner = () => (
    <div style={{
        position: "absolute",
        top: "calc(50% - 50px)",
        left: "calc(50% - 50px)"
    }} className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>)
