const { addNote, deleteNote } = require('../js/index');

describe('addNote function', () => {
  it('should add a new note', () => {
    const notes = [      { id: 1, title: 'Note 1', text: 'This is the first note' },      { id: 2, title: 'Note 2', text: 'This is the second note' },    ];

    const newNote = { title: 'Note 3', text: 'This is the third note' };
    const expectedNote = { ...newNote, id: expect.any(String) };

    const result = addNote(notes, newNote);

    expect(result).toContainEqual(expectedNote);
  });
});

describe('deleteNote function', () => {
  it('should delete the note with the given id', () => {
    const notes = [      { id: 'abc123', title: 'Note 1', text: 'This is the first note' },      { id: 'def456', title: 'Note 2', text: 'This is the second note' },    ];

    const noteId = 'def456';

    const result = deleteNote(notes, noteId);

    expect(result).not.toContainEqual(expect.objectContaining({ id: noteId }));
  });
});
