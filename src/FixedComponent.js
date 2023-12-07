
import { memo } from "react"

function FixedComponent() {
    return (
        <>
            <h1>
                Hello This is Fixed!
            </h1>
            <hr />
        </>
    )
}

export default memo(FixedComponent);