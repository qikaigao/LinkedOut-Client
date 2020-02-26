/*
注册路由组件
 */

import React, {Component} from "react";
import {
    NavBar,
    WingBlank,
    List,
    InputItem,
    WhiteSpace,
    Radio,
    Button
} from "antd-mobile";

import Logo from "../../components/logo/logo";

const ListItem = List.Item;

export default class Register extends Component {

    render() {
        return (
            <div>
                <NavBar>LinkedOut</NavBar>
                <Logo/>
                <WingBlank>
                    <List>
                        <WhiteSpace/>
                        <InputItem>Username:</InputItem>
                        <WhiteSpace/>
                        <InputItem type='password'>Password:</InputItem>
                        <WhiteSpace/>
                        <InputItem type='password'>Comfirm:</InputItem>
                        <WhiteSpace/>
                        <ListItem>
                            <span>User type:</span> &nbsp; &nbsp; &nbsp;
                            <Radio>Boss</Radio>
                            <Radio>Applicant</Radio>
                        </ListItem>
                        <WhiteSpace/>
                        <Button type='primary'>Log In</Button>
                        <WhiteSpace/>
                        <Button>Already in LinkedOut?</Button>
                    </List>
                </WingBlank>
            </div>
        );
    }
}