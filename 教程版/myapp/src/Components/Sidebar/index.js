import React from 'react'

export default function Sidebar(props) {
  // 函数式，则是通过传参获取
  console.log(props);
  let {bg} = props
  return (
    <div>
      <h2>函数式</h2>
      <ul style={{background: bg}}>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
        <li>11</li>
        <li>12</li>
        <li>13</li>
        <li>14</li>
        <li>15</li>
        <li>16</li>
        <li>17</li>
        <li>18</li>
        <li>19</li>
        <li>20</li>
        <li>21</li>
        <li>22</li>
      </ul>
    </div>
  )
}
