// Generated by typings
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/f9b6faf87c32cbda22b6107a0a4488429e7a9fbc/react/react-addons-transition-group.d.ts
declare namespace __React {

    interface TransitionGroupProps {
        component?: ReactType;
        className?: string;
        childFactory?: (child: ReactElement<any>) => ReactElement<any>;
    }

    type TransitionGroup = ComponentClass<TransitionGroupProps>;

    namespace __Addons {
        export var TransitionGroup: __React.TransitionGroup;
    }
}

declare module "react-addons-transition-group" {
    var TransitionGroup: __React.TransitionGroup;
    type TransitionGroup = __React.TransitionGroup;
    export = TransitionGroup;
}