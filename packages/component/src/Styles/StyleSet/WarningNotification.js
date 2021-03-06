export default function ({
  connectivityIconPadding,
  connectivityMarginLeftRight,
  connectivityMarginTopBottom,
  connectivityTextSize,
  primaryFont,
  slowConnectivity,
  notificationText,
}) {
  return {
    alignItems: 'center',
    color: notificationText,
    display: 'flex',
    fontFamily: primaryFont,
    fontSize: connectivityTextSize,
    marginBottom: connectivityMarginTopBottom,
    marginLeft: connectivityMarginLeftRight,
    marginRight: connectivityMarginLeftRight,
    marginTop: connectivityMarginTopBottom,

    '& > svg': {
      fill: slowConnectivity,
      paddingRight: connectivityIconPadding,
    }
  };
}
