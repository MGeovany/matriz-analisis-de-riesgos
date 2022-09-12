/* eslint-disable space-before-function-paren */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Riesgo } from '../API'

export const MatrixRisk = ({ riesgos }) => {
  const [riesgosList, setRiesgosList] = useState([])
  const [matrixRisk, setRiesgoMatrix] = useState([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
  ])
  React.useState(() => {
    Riesgo()
      .get('riesgos')
      .then((res) => {
        setRiesgosList(res)
        MatrixRiskCounter(res)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

  const matrixPoints = [
    [1, 2, 4, 7, 11],
    [3, 5, 8, 12, 16],
    [6, 9, 13, 17, 20],
    [10, 14, 18, 21, 23],
    [15, 19, 22, 24, 25]
  ]

  function MatrixRiskCounter(riesgos) {
    const riesgoCount = [...matrixRisk]
    const test = riesgos.map((riesgo) => {
      return matrixPoints.map((i, idxi) => {
        return i.map((j, idxj) => {
          if (riesgo.NivelRiesgo === j) {
            const value = parseInt(riesgoCount[idxi][idxj])
            riesgoCount[idxi][idxj] = value + 1
          }
          return 0
        })
      })
    })
    setRiesgoMatrix(riesgoCount)
  }

  return (
    <div className='container'>
      <div className='row bajo'>{showMatrixResult(matrixRisk, 0, 0)}</div>
      <div className='row bajo'>{showMatrixResult(matrixRisk, 0, 1)}</div>
      <div className='row bajo'>{showMatrixResult(matrixRisk, 0, 2)}</div>
      <div className='row medio'>{showMatrixResult(matrixRisk, 0, 3)}</div>
      <div className='row alto'>{showMatrixResult(matrixRisk, 0, 4)}</div>

      <div className='row bajo'>{showMatrixResult(matrixRisk, 1, 0)}</div>
      <div className='row bajo'>{showMatrixResult(matrixRisk, 1, 1)}</div>
      <div className='row medio'>{showMatrixResult(matrixRisk, 1, 2)}</div>
      <div className='row medio'>{showMatrixResult(matrixRisk, 1, 3)}</div>
      <div className='row alto'>{showMatrixResult(matrixRisk, 1, 4)}</div>

      <div className='row bajo'>{showMatrixResult(matrixRisk, 2, 0)}</div>
      <div className='row medio'>{showMatrixResult(matrixRisk, 2, 1)}</div>
      <div className='row medio'>{showMatrixResult(matrixRisk, 2, 2)}</div>
      <div className='row alto'>{showMatrixResult(matrixRisk, 2, 3)}</div>
      <div className='row severo'>{showMatrixResult(matrixRisk, 2, 4)}</div>

      <div className='row medio'>{showMatrixResult(matrixRisk, 3, 0)}</div>
      <div className='row medio'>{showMatrixResult(matrixRisk, 3, 1)}</div>
      <div className='row alto'>{showMatrixResult(matrixRisk, 3, 2)}</div>
      <div className='row alto'>{showMatrixResult(matrixRisk, 3, 3)}</div>
      <div className='row severo'>{showMatrixResult(matrixRisk, 3, 4)}</div>

      <div className='row medio'>{showMatrixResult(matrixRisk, 4, 0)}</div>
      <div className='row alto'>{showMatrixResult(matrixRisk, 4, 1)}</div>
      <div className='row alto'>{showMatrixResult(matrixRisk, 4, 2)}</div>
      <div className='row severo'>{showMatrixResult(matrixRisk, 4, 3)}</div>
      <div className='row severo'>{showMatrixResult(matrixRisk, 4, 4)}</div>
    </div>
  )
}
const showMatrixResult = (matrix, i, j) =>
  matrix[i][j] === 0 ? '' : matrix[i][j]
