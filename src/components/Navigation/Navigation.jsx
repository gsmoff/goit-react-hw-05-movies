import { StyledLink, StyledList } from './Navigation.styled';
export const Navigation = () => {
  return (
    <>
      <nav>
        <StyledList>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="movies">Movies</StyledLink>
          </li>
        </StyledList>
      </nav>
    </>
  );
};
