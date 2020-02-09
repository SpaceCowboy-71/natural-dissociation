//
// FetchContainer.tsx
// 
//
// Created by Thomas Schönmann on 08.02.2020
// Copyright © 2020 expressFlow GmbH. All rights reserved.
//
// 
//

import React, { memo, ReactNode } from 'react';
import {useLocation, useParams} from "react-router-dom"

/*
 *
 * Interfaces.
 *
 */


/*
 *
 * Components.
 *
 */

export default memo(() => {
    const location = useParams()
    console.log(location)
 return null;
});