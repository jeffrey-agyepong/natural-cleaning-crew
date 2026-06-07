import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../../keystatic.config';

/** Reads published content authored through the /keystatic admin UI. */
export const reader = createReader('.', keystaticConfig);
