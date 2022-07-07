interface IProps {
  station: string;
}

export default function StationList(props: IProps): JSX.Element {
  return (
    <>
      <p>{props.station} </p>
    </>
  );
}
