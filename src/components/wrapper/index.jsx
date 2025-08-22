import "@/styles/layouts/_wrapper.scss";
export default function Wrapper({ children }) {
    return (
        <div className="wrapper">
            {children}
        </div>
    );
}