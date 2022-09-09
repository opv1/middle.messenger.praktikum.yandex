import router from 'src/router';
import Block from 'src/utils/Block';

function withRouter(Component: typeof Block) {
  return class WithRouter extends Component {
    public static componentName = Component.name;

    constructor(props: any) {
      super({ ...props, router: router });
    }
  };
}

export default withRouter;
