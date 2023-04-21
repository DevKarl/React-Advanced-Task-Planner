import Modal from '../UI/Modal';
import classes from './SettingsModal.module.css';
import { useState } from 'react';

const SettingsModal = props => {

    const [selectedColor, setSelectedColor] = useState('#2d7fd7');

    const handleCloseSettingsModal = () => props.togglesettingsModalActive();

    const handleModalMainBtnClick = () => {
        console.log('settings main btn clicked');
    }

    const handleColorClick = col => {
        setSelectedColor(col);
    }

    const colors = ['#2d7fd7', "#4caf50", "#ffd54f", "#9e9e9e", "#ff9800", "#7b1fa2", "#00796b", "#e91e63", "#00bcd4"];

    return (
        <Modal style = {{height: '1000px'}}
            closeModalHandler = {handleCloseSettingsModal}
            modalXtraTall = {true}
            hasTwoBtns = 'true'
            btn1Text = 'Save'
            btn2Text = 'Close'
            btn1Click = {handleModalMainBtnClick}
            btn2Click = {handleCloseSettingsModal}
        >
            <div className={classes.settingsContainer}>
                <div className={classes.changeColorThemeContainer}>
                    <h3 className={classes.changeColorHeader}>Change Theme-Color</h3>
                    <div className={classes.colorPickerBox}>
                        {colors.map((col, i) => {
                            return <div 
                                key = {i} 
                                className={`${classes.colorItem} ${selectedColor === col ? classes.colorItemSelected : ''}`} 
                                style={{ backgroundColor: col }}
                                onClick={() => handleColorClick(col)}
                            >{selectedColor === col ? '✔' : ''}</div>
                        })}
                    </div> 
                </div>
                <div className={classes.saveBtnOptContainer}>
                    <h3 className={classes.saveSortOptHeader}>Save Sort-Option</h3>
                    <label className={classes.switch}>
                        <input type="checkbox"/>
                        <span className={classes.sliderRound}></span>
                    </label>
                </div>
                <div className={classes.saveBtnOptContainer}>
                    <h3 className={classes.saveAutoEmojiesHeader}>Save Auto-Emojies</h3>
                    <label className={classes.switch}>
                        <input type="checkbox"/>
                        <span className={classes.sliderRound}></span>
                    </label>
                </div>
            </div>   
        </Modal>
    );

};


export default SettingsModal;