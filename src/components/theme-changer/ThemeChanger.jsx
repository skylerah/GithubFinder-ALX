import { useEffect } from 'react'
import { themeChange } from 'theme-change'

import React from 'react'

function ThemeChanger() {
    const themeValues = ['retro', 'wireframe', 'lemonade', 'light', 'dark', 'bumblebee']
    useEffect(() => {
        themeChange(false)
        // 👆 false parameter is required for react project
    })

    return (
        <select className="select select-secondary select-sm" data-choose-theme>
            <option disabled>Select Theme</option>
            <option value=''>Default</option>
            {themeValues.map((theme) => (
                <option className='text-dark' value={theme.toLocaleLowerCase()} key={theme}>{theme}</option>
            ))}
        </select>
    )
}

export default ThemeChanger