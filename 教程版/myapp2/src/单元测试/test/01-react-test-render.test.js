/* eslint-disable testing-library/render-result-naming-convention */
// @ts-nocheck
/*
!组件测试，浅层，不测试子组件。
*/
import ShallowRender from "react-test-renderer/shallow";
import App from "../App";
import ReactTestUtil, {act} from 'react-dom/test-utils';
import TestRenderer from 'react-test-renderer';

describe("react-test-render", function () {
  it("组件完成性", function () {
    const render = new ShallowRender();
    render.render(<App></App>);
    console.log(render.getRenderOutput().props);

    // !我们要使用断言进行判断，组件内部的方法，属性，状态，满足条件
    expect(render.getRenderOutput().props.children[0].type).toBe("input");
  });

  it("测试删除功能", function () {
    /*
    !renderIntoDocument 已经弃用，react测试不推荐测试事件了
    */


    const app = ReactTestUtil.renderIntoDocument(<App></App>)

    // console.log(app);

    let todoitems = ReactTestUtil.scryRenderedDOMComponentsWithTag(app, "li");

    // console.log(todoitems);

    let deleteButton = todoitems[0].querySelector("button")

  
    ReactTestUtil.Simulate.click(deleteButton);

    let todoitemsAfterClick = ReactTestUtil.scryRenderedDOMComponentsWithTag(app, "li")


    // !断言验证
    expect(todoitems.length - 1).toBe(todoitemsAfterClick.length)


  });
});
