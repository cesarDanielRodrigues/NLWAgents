import dayjs, { locale } from "dayjs";
import "dayjs/locale/pt-br"
import relativeTime from "dayjs/plugin/relativeTime";

locale("pt-br");
dayjs.extend(relativeTime);

export { dayjs };
