import React, { Component } from 'react';



class MyInput extends Component {
    render () {
        return(
            <div class="container">
                <div class="parent">
                    <input class="cbox" type="checkbox" />
                    <label class="add" for="cbox">Click Me</label>
                    <input class="message" type="text" />
                </div>
            </div>
        );
    }
}

export default MyInput;

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
  },
  activeTitle: {
    color: 'red',
  },
});
