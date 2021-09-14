import { createIcon, Icon } from '@chakra-ui/react';

const LogoBase = createIcon({
  defaultProps: {
    fill: 'none',
  },
  displayName: 'LogoBase',
  viewBox: '0 0 229 68',
  path: (
    <path
      d="M40.898 7.376c4.256 4.074 4.403 10.826.33 15.082l-7.377 7.705-7.705-7.377c-4.256-4.073-4.403-10.826-.329-15.081 4.074-4.255 10.826-4.403 15.081-.329ZM60.161 25.817c-4.255-4.074-11.008-3.927-15.081.329l-7.377 7.705 7.705 7.376c4.256 4.074 11.008 3.927 15.082-.328 4.074-4.256 3.926-11.008-.329-15.082ZM7.705 42.049c4.255 4.074 11.008 3.927 15.081-.329l7.377-7.705-7.705-7.376c-4.256-4.074-11.008-3.927-15.082.329-4.074 4.255-3.926 11.007.329 15.081ZM26.968 60.49c-4.256-4.074-4.403-10.826-.33-15.082l7.377-7.705 7.705 7.377c4.256 4.074 4.403 10.826.329 15.081-4.074 4.255-10.826 4.403-15.081.329ZM78.026 50.433c-.256 0-.496-.096-.72-.288a.921.921 0 0 1-.288-.672c0-.224.064-.432.192-.624l10.992-15.504-10.464-14.928c-.096-.16-.144-.368-.144-.624s.096-.48.288-.672a.921.921 0 0 1 .672-.288h2.88c.48 0 .912.272 1.296.816l8.448 12 8.4-12c.32-.544.736-.816 1.248-.816h2.736c.256 0 .48.096.672.288a.921.921 0 0 1 .288.672c0 .288-.064.496-.192.624L94.01 33.393l10.944 15.456c.128.192.192.4.192.624 0 .256-.096.48-.288.672a.977.977 0 0 1-.72.288h-2.928c-.48 0-.912-.272-1.296-.816l-8.928-12.432-8.88 12.432c-.32.544-.736.816-1.248.816h-2.832Zm52.831 0c-.32 0-.592-.096-.816-.288a1.211 1.211 0 0 1-.288-.816V38.001l-11.568-19.584c0-.064-.016-.16-.048-.288a.773.773 0 0 1-.096-.336c0-.256.096-.48.288-.672a.921.921 0 0 1 .672-.288h2.496c.544 0 .96.272 1.248.816l9.36 15.552 9.36-15.552c.352-.544.784-.816 1.296-.816h2.448c.288 0 .528.096.72.288a.921.921 0 0 1 .288.672c0 .16-.064.368-.192.624l-11.52 19.584V49.33c0 .32-.112.592-.336.816a1.211 1.211 0 0 1-.816.288h-2.496Zm32.461 0c-.32 0-.592-.096-.816-.288a1.211 1.211 0 0 1-.288-.816V17.937c0-.32.096-.576.288-.768a1.11 1.11 0 0 1 .816-.336h2.544c.32 0 .576.112.768.336.224.192.336.448.336.768v28.32h15.936c.352 0 .624.112.816.336.224.192.336.464.336.816v1.92c0 .32-.112.592-.336.816a1.211 1.211 0 0 1-.816.288h-19.584Zm48.539.48c-4.192 0-7.44-1.088-9.744-3.264-2.272-2.208-3.472-5.52-3.6-9.936-.032-.96-.048-2.32-.048-4.08 0-1.76.016-3.104.048-4.032.128-4.32 1.376-7.6 3.744-9.84 2.368-2.272 5.568-3.408 9.6-3.408 4 0 7.184 1.136 9.552 3.408 2.368 2.24 3.616 5.52 3.744 9.84.064 1.856.096 3.2.096 4.032 0 .8-.032 2.16-.096 4.08-.128 4.416-1.344 7.728-3.648 9.936-2.272 2.176-5.488 3.264-9.648 3.264Zm0-4.08c2.528 0 4.544-.768 6.048-2.304 1.504-1.536 2.32-3.888 2.448-7.056.064-1.92.096-3.2.096-3.84 0-.704-.032-1.984-.096-3.84-.128-3.168-.96-5.52-2.496-7.056-1.504-1.536-3.504-2.304-6-2.304-2.528 0-4.56.768-6.096 2.304-1.504 1.536-2.32 3.888-2.448 7.056-.032.928-.048 2.208-.048 3.84 0 1.6.016 2.88.048 3.84.128 3.168.944 5.52 2.448 7.056 1.536 1.536 3.568 2.304 6.096 2.304Z"
      fill="#000100"
    />
  ),
});

const Logo = ({ ...props }) => {
  return <Icon {...props} as={LogoBase} />;
};

export default Logo;