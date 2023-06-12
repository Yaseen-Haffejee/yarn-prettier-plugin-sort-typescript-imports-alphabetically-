const importSorter = require('./import-sorter');

const imports = `import { CircleWrapper } from './CircleWrapper';
import { DataOwnershipMultiPointedLine } from './DataOwnershipMultiPointedLine';
import { DataOwnershipStraightLine } from './DataOwnershipStraightLine';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { Accordion, AccordionDetails, AccordionSummary, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import SimpleCard from 'components/atoms/SimpleCard';
import H2 from 'components/atoms/core/H2';
import ScrollAnimationWrapper from 'components/molecules/animation/ScrollAnimationWrapper';
import { AnimatePresence } from 'framer-motion';
import { IPropsBase, ObjectArray } from 'lib/types';
import { CircleAttributes, DataOwnershipSegement } from 'models/data-programme-models';
import { useState } from 'react';
import * as React from 'react';
import { themeConsts } from 'styles/ThemeWrapper';
import { VoxelWrapper } from 'styles/voxelMixins';
import { makeStyles } from 'tss-react/mui';`;

const sortedImports = importSorter.sortImports(imports);

console.log(sortedImports);