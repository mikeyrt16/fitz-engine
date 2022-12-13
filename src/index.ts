import initShaderProgram from './init-shaders'
import initBuffers from './init-buffers'
import drawScene from './draw-scene'
import vsSource from './shaders/vert.glsl'
import fsSource from './shaders/frag.glsl'

const canvas = document.querySelector<HTMLCanvasElement>('#glcanvas')
const gl = canvas.getContext('webgl')

if (gl === null) {
  alert('Unable to initialize WebGL. Your browser or machine may not support it.')
} else {
  gl.clearColor(0.0, 0.0, 0.0, 1.0)
  gl.clear(gl.COLOR_BUFFER_BIT)

  const shaderProgram = initShaderProgram(gl, vsSource, fsSource)

  const programInfo = {
    program: shaderProgram,
    attribLocations: {
      vertexPosition: gl.getAttribLocation(shaderProgram, 'aVertexPosition'),
    },
    uniformLocations: {
      projectionMatrix: gl.getUniformLocation(shaderProgram, 'uProjectionMatrix'),
      modelViewMatrix: gl.getUniformLocation(shaderProgram, 'uModelViewMatrix'),
    },
  }

  const buffers = initBuffers(gl)

  drawScene(gl, programInfo, buffers)
}
