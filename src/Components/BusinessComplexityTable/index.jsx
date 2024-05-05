import React, { useState, useEffect } from "react";

export const BusinessComplexityTable = ({setTotalValue})=>{
    
    const [executiveKnowledge, setExecutiveKnowledge] = useState(0);
    const [goalsDefinition, setGoalsDefinition] = useState(0);
    const [businessProcesses, setBusinessProcesses] = useState(0);
    const [businessPolitics, setBusinessPolitics] = useState(0);
    const [businessRegulations, setBusinessRegulations] = useState(0);
    const [personal, setPersonal] = useState(0);
    const [businessGeography, setBusinessGeography] = useState(0);
    const [businessRules, setBusinessRules] = useState(0);

    const handleSelection = (setter, value) => {
        setter(value);
        
    };
    useEffect(()=>{
        setTotalValue(
            executiveKnowledge + goalsDefinition + businessProcesses + businessPolitics + businessRegulations + personal + businessGeography + businessRules
        );
    },[executiveKnowledge, goalsDefinition, businessProcesses, businessPolitics, businessRegulations, personal, businessGeography, businessRules])
    

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Complejidad Baja</th>
                        <th>Complejidad Media</th>
                        <th>Complejidad Alta</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Cuántos ejecutivos tienen conocimientos en esta rama del negocio</td>
                        <td>
                            <label>
                                <input type="radio" name="execKnowledge" onClick={() => handleSelection(setExecutiveKnowledge, 1)} />
                                Uno
                            </label>
                        </td>
                        <td><label>
                            <input type="radio" name="execKnowledge" onClick={() => handleSelection(setExecutiveKnowledge, 2)} />
                            Entre 2 y 3
                            </label>
                        </td>
                        <td>
                            <label>
                                <input type="radio" name="execKnowledge" onClick={() => handleSelection(setExecutiveKnowledge, 3)} />
                                Ninguno o más de 3
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>Definición de Objetivos del negocio</td>
                        <td>
                            <label>
                                <input type="radio" name="goalsDefinition" onClick={() => handleSelection(setGoalsDefinition, 1)} />
                                Método SMART
                            </label>
                        </td>
                        <td><label>
                                <input type="radio" name="goalsDefinition" onClick={() => handleSelection(setGoalsDefinition, 2)} />
                                Método SMART, aplicado no en su totalidad
                            </label>
                        </td>
                        <td>
                            <label>
                                <input type="radio" name="goalsDefinition" onClick={() => handleSelection(setGoalsDefinition, 3)} />
                                Vagos
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>Procesos de negocio</td>
                        <td>
                            <label>
                                <input type="radio" name="businessProcesses" onClick={() => handleSelection(setBusinessProcesses, 1)} />
                                Pocos (1 a 4)
                            </label>
                        </td>
                        <td><label>
                                <input type="radio" name="businessProcesses" onClick={() => handleSelection(setBusinessProcesses, 2)} />
                                Entre 5 y 6
                            </label>
                        </td>
                        <td>
                            <label>
                                <input type="radio" name="businessProcesses" onClick={() => handleSelection(setBusinessProcesses, 3)} />
                                Más de 6
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>Políticas del negocio</td>
                        <td>
                            <label>
                                <input type="radio" name="businessPolitics" onClick={() => handleSelection(setBusinessPolitics, 1)} />
                                Existentes
                            </label>
                        </td>
                        <td><label>
                                <input type="radio" name="businessPolitics" onClick={() => handleSelection(setBusinessPolitics, 2)} />
                                Vagas
                            </label>
                        </td>
                        <td>
                            <label>
                                <input type="radio" name="businessPolitics" onClick={() => handleSelection(setBusinessPolitics, 3)} />
                                Inexistentes
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>Regulaciones del negocio (Superintendencia o SII)</td>
                        <td>
                            <label>
                                <input type="radio" name="businessRegulations" onClick={() => handleSelection(setBusinessRegulations, 1)} />
                                Pocas y Simples
                            </label>
                        </td>
                        <td><label>
                                <input type="radio" name="businessRegulations" onClick={() => handleSelection(setBusinessRegulations, 2)} />
                                Pocas y complejas
                            </label>
                        </td>
                        <td>
                            <label>
                                <input type="radio" name="businessRegulations" onClick={() => handleSelection(setBusinessRegulations, 3)} />
                                Muchas y Complejas
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>Personal</td>
                        <td>
                            <label>
                                <input type="radio" name="personal" onClick={() => handleSelection(setPersonal, 1)} />
                                Experimentado
                            </label>
                        </td>
                        <td>
                            <label>
                                <input type="radio" name="personal" onClick={() => handleSelection(setPersonal, 2)} />
                                Poca experiencia
                            </label>
                        </td>
                        <td>
                            <label>
                                <input type="radio" name="personal" onClick={() => handleSelection(setPersonal, 3)} />
                                Sin Experiencia
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>Ámbito geográfico del negocio</td>
                        <td>
                            <label>
                                <input type="radio" name="businessGeography" onClick={() => handleSelection(setBusinessGeography, 1)} />
                                Una Localización
                            </label>
                        </td>
                        <td>
                            <label>
                                <input type="radio" name="businessGeography" onClick={() => handleSelection(setBusinessGeography, 2)} />
                                Regional
                            </label>
                        </td>
                        <td>
                            <label>
                                <input type="radio" name="businessGeography" onClick={() => handleSelection(setBusinessGeography, 3)} />
                                Global
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>Reglas internas del negocio</td>
                        <td>
                            <label>
                                <input type="radio" name="businessRules" onClick={() => handleSelection(setBusinessRules, 1)} />
                                Establecidas
                            </label>
                        </td>
                        <td>
                            <label>
                                <input type="radio" name="businessRules" onClick={() => handleSelection(setBusinessRules, 2)} />
                                Vagas
                            </label>
                        </td>
                        <td>
                            <label>
                                <input type="radio" name="businessRules" onClick={() => handleSelection(setBusinessRules, 3)} />
                                Inexistentes
                            </label>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}