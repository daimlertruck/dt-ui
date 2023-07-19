# Toast

Toast is a pop-up message used to display relevant information to our users.

## Usage

```jsx
import { Toaster, ToastType, emitToast } from '@dt-ui/react';

const notify = () =>
  emitToast({
    title: 'success',
    message: 'myMEssage' + count,
    type: ToastType.Success,
  });

const App = () => {
  return (
    <div>
      <button onClick={notify}>Click me</button>
      <Toaster />
    </div>
  );
};
```

### Customizable

It's a very customizable component. We are using [react-hot-toast](https://react-hot-toast.com/) for control our provider. You can check the `react-hot-toast` documentation for more knowledge on this. However, you can create your provider if you wish. For example, let's say you want to create a new prop called `autoHide`. If this prop isn't true, you want to have the toast indefinitely on the screen.

```jsx
interface CallToastArgs {
  title: string;
  message: string;
  type: ToastType;
  autoHide: boolean;
}

export const ToasterContext = createContext({
  callToast: (args: CallToastArgs) => null,
});

const Toaster = ({ children }: { children: React.ReactNode }) => {
  const [toast, setToast] = useState<
    Partial<ToastProps> & { autoHide: boolean }
  >(null);

  const callToast = ({ title, message, type, autoHide }: CallToastArgs) =>
    setToast({
      id: Date.now().toString(),
      title,
      message,
      type,
      autoHide,
    });

  const close = () =>
    setToast((prevState) => ({ ...prevState, isVisible: false }));

  useEffect(() => {
    if (toast && toast.autoHide) {
      const timer = setTimeout(() => close(), 1000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  return (
    <ToasterContext.Provider value={{ callToast }}>
      {children}
      <div style={{ position: 'fixed', bottom: 10, left: 10 }}>
        {toast && (
          <Toast
            key={toast.id}
            id={toast.id}
            type={toast.type}
            title={toast.title}
            message={toast.message}
            isVisible={toast.isVisible}
            onClose={close}
          />
        )}
      </div>
    </ToasterContext.Provider>
  );
};

const App = () => {
  return (
    <Toaster>
      <MyComponent />
    </Toaster>
  );
};

const MyComponent = () => {
  const { callToast } = useContext(ToasterContext);

  return (
      <Button
        onClick={() =>
          callToast({
            message: 'myMEssage' + count,
            type: ToastType.Success,
            title: 'success',
            autoHide: false,
          })
        }
      >
        Clicked Me
      </Button>
  );
};
```

## API

### Toaster

| Property             | Type                            | Default                  | Description                                                                                                                                                                        |
| -------------------- | :------------------------------ | :----------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `smallPosition`      | `enum<ToastPosition>`           | ToastPosition.BottomLeft | You can change the position of all toasts by modifying supplying smallPosition prop for screens that are 767px width or less.                                                      |
| `defaultPosition`    | `enum<ToastPosition>`           | ToastPosition.BottomLeft | You can change the position of all toasts by modifying supplying defaultPosition prop for screens that are 768px width or more.                                                    |
| `toastOptions`       | `DefaultToastOptions`           | -                        | These will act as default options for all toasts. See the documentation [here](https://react-hot-toast.com/docs/toast).                                                            |
| `reverseOrder`       | `boolean`                       | -                        | Toasts spawn at top by default. Set to true if you want new toasts at the end.                                                                                                     |
| `gutter`             | `number`                        | 8                        | Changes the gap between each toast.                                                                                                                                                |
| `containerStyle`     | `React.CSSProperties`           | -                        | Customize the style of toaster div. This can be used to change the offset of all toasts                                                                                            |
| `containerClassName` | `string`                        | undefined                | Add a custom CSS class name to toaster div.                                                                                                                                        |
| `children`           | `(toast: Toast) => JSX.Element` | -                        | You can provide your own render function to the Toaster by passing it as children. It will be called for each Toast allowing you to render any component based on the toast state. |
|                      |

### emitToast

| Property   | Type              | Default | Description                                                     |
| ---------- | :---------------- | :------ | :-------------------------------------------------------------- |
| `type`     | `enum<ToastType>` | -       | Sets the variant toast ("success", ..., "N")                    |
| `title`    | `string`          | -       | The title to be displayed                                       |
| `message`  | `string`          | -       | The message to be displayed                                     |
| `children` | `ReactNode`       | -       | A child that will be rendered at the end of the content section |

The emitToast extends from ToastOptions. They will overwrite all options received from `<Toaster />`. For example:

| Property   | Type                  | Default                         | Description                                      |
| ---------- | :-------------------- | :------------------------------ | :----------------------------------------------- |
| `duration` | `number`              | For success: 5000, error: 15000 | Show the toast for a duration in ms              |
| `position` | `enum<ToastPosition>` | -                               | You can change the position of the Toast called. |
| `style`    | `CSSProperties`       | -                               | Add css directly to the toast.                   |

You can check all ToastOptions [here](https://react-hot-toast.com/docs/toast).

### Toast

| Property    | Type              | Default | Description                                                       |
| ----------- | :---------------- | :------ | :---------------------------------------------------------------- |
| `id`        | `string`          | -       | Toast identifier                                                  |
| `dataTest`  | `string`          | -       | Defines a value for the data test                                 |
| `title`     | `string`          | -       | The title to be displayed                                         |
| `message`   | `string`          | -       | The message to be displayed                                       |
| `onClose`   | `string`          | -       | The callback when the close button is fired.                      |
| `type`      | `enum<ToastType>` | -       | Sets the variant toast ("success", ..., "N")                      |
| `isVisible` | `boolean`         | true    | Sets the visibility of the toast                                  |
| `children`  | `ReactNode`       | -       | Child components to be rendered at the end of the content section |
