import React from 'react'
import img from '../assets/pikachu_icon-icons.com_67535.ico'

export default function ModalStats({ closeModal, imageUrl, name, hp, atk, def, spAtk, spDef, speed, ab1, ab2 }) {
  return (
    <div className="flex relative justify-center items-center">
      <div className="fixed -z- inset-0 h-screen w-screen bg-bodyColor/75" onClick={closeModal}></div>

      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-100 rounded-lg w-[35rem] h-[25rem]">
        <button className="absolute bg-red-900 w-10 h-10 rounded-tr-lg right-0 text-white" onClick={closeModal}>
          X
        </button>

        <div className="flex w-full h-full">
          <div className="w-1/2 h-full rounded-l-lg flex items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-3">
              <img className="w-1/2" src={imageUrl} alt="" />
              <h2 className="text-4xl font-bold">{name && name.charAt(0).toUpperCase() + name.slice(1)}</h2>
            </div>
          </div>

          <div className="w-1/2 h-full flex flex-col gap-10 rounded-r-lg bg-slate-900/10 pt-20">
            <div className="flex flex-col gap-5 justify-center items-center">
              <h2 className="text-2xl text-black font-bold">Statistiques</h2>
              <div className="flex gap-20 items-center justify-center">
                <div className="flex flex-col gap-3">
                  <h4>PV : {hp}</h4>
                  <h4>ATQ : {atk}</h4>
                  <h4>DEF : {def}</h4>
                </div>
                <div className="flex flex-col gap-3">
                  <h4>ATQ-SP : {spAtk}</h4>
                  <h4>DEF-SP : {spDef}</h4>
                  <h4>VIT : {speed}</h4>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5 justify-center items-center">
              <h2 className="text-2xl text-black font-bold">Aptitude</h2>
              <div className="flex gap-20">
                <h4>{ab1}</h4>
                <h4>{ab2}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
