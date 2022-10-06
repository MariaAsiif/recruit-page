import React from 'react'
import DiagnoseSlick from './DiagnoseSlick'
import { DiagnoseMainContainer } from './StyledDiagnose'

const Diaganose = ({id}) => {
  return (
    <DiagnoseMainContainer id={id} >
    <h3>Diagnose</h3>
    <p>TELE-MEDICINE + TELE-DIAGNOSE IS THE SOLUTION + GLOBAL DIAGNOSTIC CENTER</p>
    <DiagnoseSlick/>
    </DiagnoseMainContainer>
  )
}

export default Diaganose