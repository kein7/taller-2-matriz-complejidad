import React, { useState, useEffect } from "react";

export const TechnologyComplexityTable = ({setTotalValue})=>{
    
    const [projectArchitecture, setprojectArchitecture] = useState(0);
    const [technologyProviders, setTechnologyProviders] = useState(0);
    const [locationToControlled, setLocationToControlled] = useState(0);
    const [technologyStaff, setTechnologyStaff] = useState(0);
    const [plataformsQuantity, setPlataformsQuantity] = useState(0);
    const [integrationLevel , setIntegrationLevel ] = useState(0);
    const [faultTolerant, setFaultTolerant] = useState(0);

    const handleSelection = (setter, value) => {
        setter(value);
        
    };
    useEffect(()=>{
        setTotalValue(
            projectArchitecture + technologyProviders + locationToControlled + technologyStaff + plataformsQuantity + integrationLevel  + faultTolerant
        );
    },[projectArchitecture, technologyProviders, locationToControlled, technologyStaff, plataformsQuantity, integrationLevel , faultTolerant])
    

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
                        <td>Arquitectura tecnológica del proyecto</td>
                        <td>
                            <label>
                                <input type="radio" name="projectArchitecture" onClick={() => handleSelection(setprojectArchitecture, 1)} />
                                Existente
                            </label>
                        </td>
                        <td>
                            <label>
                                <input type="radio" name="projectArchitecture" onClick={() => handleSelection(setprojectArchitecture, 2)} />
                                Existen, pero no desarrolladas
                            </label>
                        </td>
                        <td>
                            <label>
                                <input type="radio" name="projectArchitecture" onClick={() => handleSelection(setprojectArchitecture, 3)} />
                                Inexistente
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>Proveedores de Tecnología y telecomunicaciones</td>
                        <td>
                            <label>
                                <input type="radio" name="TechnologyProviders" onClick={() => handleSelection(setTechnologyProviders, 1)} />
                                Antiguos, con presencia de más de 4 años en el mercado
                            </label>
                        </td>
                        <td>
                            <label>
                                <input type="radio" name="TechnologyProviders" onClick={() => handleSelection(setTechnologyProviders, 2)} />
                                Antiguos, con presencia de menos de 4 años en el mercado
                            </label>
                        </td>
                        <td>
                            <label>
                                <input type="radio" name="TechnologyProviders" onClick={() => handleSelection(setTechnologyProviders, 3)} />
                                Nuevos
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>Localización de los dispositivos a controlar</td>
                        <td>
                            <label>
                                <input type="radio" name="LocationToControlled" onClick={() => handleSelection(setLocationToControlled, 1)} />
                                Entre 1 y 2 localizaciones
                            </label>
                        </td>
                        <td><label>
                                <input type="radio" name="LocationToControlled" onClick={() => handleSelection(setLocationToControlled, 2)} />
                                Entre 3 y 4 localizaciones
                            </label>
                        </td>
                        <td>
                            <label>
                                <input type="radio" name="LocationToControlled" onClick={() => handleSelection(setLocationToControlled, 3)} />
                                Más de 4
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>Personal de áreas tecnológicas</td>
                        <td>
                            <label>
                                <input type="radio" name="TechnologyStaff" onClick={() => handleSelection(setTechnologyStaff, 1)} />
                                Experimentado, más de 2 años
                            </label>
                        </td>
                        <td><label>
                                <input type="radio" name="TechnologyStaff" onClick={() => handleSelection(setTechnologyStaff, 2)} />
                                Menos de 2 años de experiencia
                            </label>
                        </td>
                        <td>
                            <label>
                                <input type="radio" name="TechnologyStaff" onClick={() => handleSelection(setTechnologyStaff, 3)} />
                                Sin experiencia
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>Cantidad de plataformas</td>
                        <td>
                            <label>
                                <input type="radio" name="plataformsQuantity" onClick={() => handleSelection(setPlataformsQuantity, 1)} />
                                Entre 1 a 3
                            </label>
                        </td>
                        <td><label>
                                <input type="radio" name="plataformsQuantity" onClick={() => handleSelection(setPlataformsQuantity, 2)} />
                                4
                            </label>
                        </td>
                        <td>
                            <label>
                                <input type="radio" name="plataformsQuantity" onClick={() => handleSelection(setPlataformsQuantity, 3)} />
                                Más de 4
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>Nivel de integración de las distintas plataformas, actualmente</td>
                        <td>
                            <label>
                                <input type="radio" name="integrationLevel" onClick={() => handleSelection(setIntegrationLevel, 1)} />
                                Integradas
                            </label>
                        </td>
                        <td>
                            <label>
                                <input type="radio" name="integrationLevel" onClick={() => handleSelection(setIntegrationLevel, 2)} />
                                Medianamente integradas
                            </label>
                        </td>
                        <td>
                            <label>
                                <input type="radio" name="integrationLevel" onClick={() => handleSelection(setIntegrationLevel, 3)} />
                                Sin integración
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>Plataformas tolerantes a fallas o redundantes</td>
                        <td>
                            <label>
                                <input type="radio" name="FaultTolerant" onClick={() => handleSelection(setFaultTolerant, 1)} />
                                Muchas (Mayor a 70%)
                            </label>
                        </td>
                        <td>
                            <label>
                                <input type="radio" name="FaultTolerant" onClick={() => handleSelection(setFaultTolerant, 2)} />
                                Entre 30% y 69%
                            </label>
                        </td>
                        <td>
                            <label>
                                <input type="radio" name="FaultTolerant" onClick={() => handleSelection(setFaultTolerant, 3)} />
                                Menos de 30%
                            </label>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}