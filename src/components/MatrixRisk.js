/* eslint-disable space-before-function-paren */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'

export const MatrixRisk = ({ riesgos }) => {
  const [nivelRiesgo, setNivelRiesgo] = useState({
    bajo: [1, 2, 3, 4, 5, 6, 7, 8],
    medio: [1, 2, 3, 4, 5, 6, 7],
    alto: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  })

  const setNiveles = (riesgos) => {
    for (let i = 0; i < 8; i++) {
      const riesgosItem = riesgos[i]
      console.log('for', riesgosItem)

      /*  if (riesgosItem?.NivelRiesgo > 2) {
        console.log('in')
        setNivelRiesgo({
          bajo: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
        })
      } */
    }
  }

  useEffect(() => {
    setNiveles(riesgos)
  }, [riesgos])

  return (
    <div className='container'>
      <div className='row bajo'>{nivelRiesgo.bajo[0]}</div>
      <div className='row bajo'>{nivelRiesgo.bajo[1]}</div>
      <div className='row bajo'>{nivelRiesgo.bajo[2]}</div>
      <div className='row bajo'>{nivelRiesgo.bajo[3]}</div>
      <div className='row medio'>{nivelRiesgo.medio[0]}</div>

      <div className='row bajo'>{nivelRiesgo.bajo[4]}</div>
      <div className='row bajo'>{nivelRiesgo.bajo[5]}</div>
      <div className='row medio'>{nivelRiesgo.medio[1]}</div>
      <div className='row medio'>{nivelRiesgo.medio[2]}</div>
      <div className='row alto'>{nivelRiesgo.alto[0]}</div>

      <div className='row bajo'>{nivelRiesgo.bajo[6]}</div>
      <div className='row medio'>{nivelRiesgo.medio[3]}</div>
      <div className='row medio'>{nivelRiesgo.medio[4]}</div>
      <div className='row alto'>{nivelRiesgo.alto[1]}</div>
      <div className='row alto'></div>

      <div className='row bajo'>{nivelRiesgo.bajo[7]}</div>
      <div className='row medio'>{nivelRiesgo.medio[5]}</div>
      <div className='row alto'>{nivelRiesgo.alto[2]}</div>
      <div className='row alto'>{nivelRiesgo.alto[3]}</div>
      <div className='row alto'>{nivelRiesgo.alto[4]}</div>

      <div className='row medio'>{nivelRiesgo.medio[6]}</div>
      <div className='row alto'>{nivelRiesgo.alto[5]}</div>
      <div className='row alto'>{nivelRiesgo.alto[6]}</div>
      <div className='row alto'>{nivelRiesgo.alto[7]}</div>
      <div className='row alto'>{nivelRiesgo.alto[8]}</div>
    </div>
  )
}
