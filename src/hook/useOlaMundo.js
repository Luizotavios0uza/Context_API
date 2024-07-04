import { useEffect, useState } from "react";

export function useOlaMundo() {
    function saudacao(){
        alert("Olá mundo!");  
    }
    return saudacao;
}