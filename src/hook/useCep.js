import { useEffect, useState } from "react";

export function useCep() {

    const [cep, setCep] = useState('');
    const [status, setStatus] = useState({
        loading: true,
        error: {},
        data: {}
    });

    useEffect( () => {
        setStatus({
            loading: true,
            error: {},
            data: {},
        })
    })
    
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((response) => response.json())
    .then(data => {
        setStatus({
            loading: false,
            error: {},
            data
        })
        }).catch(error => {
            setStatus({ 
            loading: false,
            error,
            data: {},
            })

    }, [cep]);

    return [status, setCep]
}