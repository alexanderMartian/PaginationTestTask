import fetch from 'isomorphic-fetch'
import {ITEMS_PER_PAGE} from "../../app/constants";

export const paginatedPage = ({ page }) => fetch(`https://randomuser.me/api/?page=${page}&results=${ITEMS_PER_PAGE}`).then((response) => response.json())
