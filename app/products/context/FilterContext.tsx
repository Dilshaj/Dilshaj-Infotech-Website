"use client";
import React, { createContext, useContext, useState } from "react";

interface FilterState {
    industry: string;
    solution: string;
    setIndustry: (v: string) => void;
    setSolution: (v: string) => void;
}

const FilterContext = createContext<FilterState>({
    industry: "",
    solution: "",
    setIndustry: () => { },
    setSolution: () => { },
});

export function FilterProvider({ children }: { children: React.ReactNode }) {
    const [industry, setIndustry] = useState("");
    const [solution, setSolution] = useState("");
    return (
        <FilterContext.Provider value={{ industry, solution, setIndustry, setSolution }}>
            {children}
        </FilterContext.Provider>
    );
}

export function useFilter() {
    return useContext(FilterContext);
}
