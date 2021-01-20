# ts-react-lib

- This is an experiment to see how we can use bit.dev and or storybook to build a react component library

# Setup

- install bit cli

```sh
npm install bit-bin -g
```

- bit login

```sh
bit login
```

- bit config

```sh
bit config
```

- initialize bit workspace
```sh
bit init --package-manager yarn
```

- track new component with bit

```sh
bit add src/components/product-list
```

- check status to verify tracking is proper

```sh
bit status
```

- install bit compiler for react typescript

```sh
bit import -c bit.envs/compilers/react-typescript
```

- build the react component with bit

```sh
bit build
```

- stage and tag component to bit

```sh
bit tag --all 0.0.1
```

- check if the components are staged

```sh
bit status
```

- publish/export to bit.dev using <username>.<collection>

```sh
bit export <username>.<collection>   
```


- Once you update code and want to check before exporting

```sh
bit diff
```