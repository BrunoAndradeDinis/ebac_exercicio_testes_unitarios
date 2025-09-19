import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import PostComment from "..";
import userEvent from "@testing-library/user-event";

const comments = [
  {
    id: 1,
    comment: "Primeiro comentário",
  },
  {
    id: 2,
    comment: "Segundo comentário",
  },
];

describe("Teste para o componente PostComment", () => {
  test("Deve renderizar o componente corretamente", () => {
    render(<PostComment />);
    expect(screen.getByText("Comentar")).toBeInTheDocument();
    expect(screen.getByTestId("campo-comentar")).toBeInTheDocument();
    expect(screen.getByTestId("btn-comentar")).toBeInTheDocument();
    expect(screen.getByTestId("lista-comentario")).toBeInTheDocument();
  });

  test("Deve adicionar 2 comentários ", async () => {
    const { debug } = render(<PostComment />);
    const textarea = screen.getByTestId("campo-comentar");
    const button = screen.getByTestId("btn-comentar");
    const lista = screen.getByTestId("lista-comentario");

    fireEvent.change(textarea, {
      target: {
        value: comments[0].comment,
      },
    });

    fireEvent.click(button);

    fireEvent.change(textarea, {
      target: {
        value: comments[1].comment,
      },
    });

    fireEvent.click(button);

    await waitFor(() => {
      debug();

      expect(lista.children).toHaveLength(2);
      expect(screen.getByText(comments[0].comment)).toBeInTheDocument();
      expect(screen.getByText(comments[1].comment)).toBeInTheDocument();
    });
  });
});
