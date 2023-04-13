```scss
.border-gradient {
  width: 100%;
  height: 20rem;
  position: relative;
  background-clip: padding-box;
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    border: inherit;
    background: linear-gradient(45deg, purple, orange) border-box;
    -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
  }
}
```
