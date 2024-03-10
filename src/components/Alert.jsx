const Alert = ({children, color}) => {
    return (
        <>
            <div className={`alert alert-${color} col-sm-7 col-md-6 col-lg-5 col-xxl-4 p-3 text-center`}>{children}</div>
        </>
    )
}

export default Alert;