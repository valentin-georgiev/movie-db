import { useEffect } from "react";

export const useEffectOnMount = (body) => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(body, [])
}